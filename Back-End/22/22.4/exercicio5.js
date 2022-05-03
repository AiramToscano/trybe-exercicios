const express = require('express');
const bodyParser = require('body-parser');
const { setSimpsons, getSimpsons } = require('./functionsimpsons');

const simpsons = [
    {
      "id": "1",
      "name": "Homer Simpson"
    },
    {
      "id": "2",
      "name": "Marge Simpson"
    },
    {
      "id": "3",
      "name": "Bart Simpson"
    },
    {
      "id": "4",
      "name": "Lisa Simpson"
    },
    {
      "id": "5",
      "name": "Maggie Simpson"
    },
    {
      "id": "6",
      "name": "Ned Flanders"
    },
    {
      "id": "7",
      "name": "Montgomery Burns"
    },
    {
      "id": "8",
      "name": "Nelson Muntz"
    },
    {
      "id": "9",
      "name": "Krusty"
    },
    {
      "id": "10",
      "name": "Milhouse Van Houten"
    }
  ]
const app = express();
app.use(bodyParser.json());


 const functionSimpsons = async() => {
    await setSimpsons(simpsons);
    const simpsons1 = getSimpsons()
    return simpsons1
      
  }


app.listen(3020, () => {
    console.log('Aplicação ouvindo na porta 3005');

  }); // 3



//   app.get('/simpsons', async (req, res) => {
//     try {
//       const simpsons = await functionSimpsons();
  
//       return res.status(200).json(simpsons);
//     } catch (error) {
//       return res.status(500).end();
//     }
//   })

   app.get('/simpsons/:id', async function (req, res) {
    const arraySimpsons = await functionSimpsons()
    const { id } = req.params;
     try {
         if(id < 11) {
        const findSimpsons = arraySimpsons.find((e) => e.id === id);
        return res.status(202).json(findSimpsons);
         }
         return res.status(404).json({message: 'simpson not found' })
          
      } catch (error) {
        return res.status(500).end;
      }
  });

  app.post('/simpsons',async function (req, res) {
      const { id, name } = req.body;
      try {
          const arraySimpsons = await functionSimpsons()
          const verifica = arraySimpsons.some((e) => e.id === id)
          if(!verifica) {
              const obj = {
                  id : id,
                  name: name
              }
            arraySimpsons.push(obj);
            setSimpsons(arraySimpsons);
            return res.status(204).end();
        }
        return res.status(409).json({message: 'id already exists' });
    }catch (error) {
        return res.status(500).end;
    }
  });