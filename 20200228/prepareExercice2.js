const fs = require('fs')

const fichier = fs.readFileSync('data_WWC19.csv', 'utf-8')

const result = fichier
  .split('\n')
  .map(ligne => ligne.split(';'))
  .map(d => ({
    team1: d[1],
    score1: Number(d[2]),
    team2: d[3],
    score2: Number(d[4]),
  }))
  .reduce((res,data) => {
      return [
          ...res,
          { team: data.team1, score: data.score1 },
          { team: data.team2, score: data.score2 }
      ]
  }, [])
  .reduce((res,{team, score}) => {
      const exist = res.find(d => d.team === team)
      if (exist){
        const nouveau = exist.score + score
        return [
            ...res.filter(d => d.team !== team),
            {team, score: nouveau}
        ]
      }
    return [
        ...res,
        {team, score}
    ]
  },[])
  .map(d => ({ equipe: d.team, nb_buts: d.score }))
  .sort((a, b) => a.nb_buts < b.nb_buts ? 1 : -1)
  .filter(team => team.nb_buts > 10);

  console.log(
    JSON.stringify(result, null, 2)
  )