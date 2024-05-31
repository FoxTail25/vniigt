export default function TableTrain({ trains, setTrain }) {

  return <>
    <table className='table1'>
      <thead>
        <tr>
          <th>
            Поезда
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='descr'>
          <td>Название</td>
          <td>Описание</td>
        </tr>
        {
          trains && trains.map(e =>
            <tr key={e.description} className='train' onClick={() => setTrain(e.name)}>
              
              <td>{e.name}</td>
              <td>{e.description}</td>

            </tr>)
        }
      </tbody>
    </table>
  </>
}