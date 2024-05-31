import { useState, useEffect } from 'react';
import './App.css';
import TableTrain from './Table_train';
import TableTrainData from './Table_data_train';

function App() {

  let [data, setData] = useState()
  let [train, seTrain] = useState()
  let trainDescription;
  if(train) {
    trainDescription = data.filter(e => e.name === train)[0]
  } 

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/allbel/ae2f8ead09baf7bb66d281e3a6050261/raw/4c898f101913cd7918ab1dbfce008fa12c6d4838/mock.json')
      .then(data => data.json())
      .then(d => {
        console.log("данные успешно загружены");
        setData(d)
      })
  }, [])


  return <>
     <div className='container'>
      <TableTrain  trains={data} setTrain={seTrain} />
      <TableTrainData train={trainDescription}/>
    </div>

  </>
}

export default App;
