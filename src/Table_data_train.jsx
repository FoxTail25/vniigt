import { useEffect, useState } from "react";
import t2 from './table2.module.css';

export default function TableTrainData({ train }) {

    let [sendData, setSendData] = useState(true)
    let [trainData, setTrainData] = useState()

    useEffect(() => {
        setTrainData(train)
    }, [train])


    function editAmper(event, i) {
        let value = +event.target.value

        checkValue(value, event)

        let oldTrainData = { ...trainData }
        oldTrainData.characteristics[i].engineAmperage = value
        setTrainData(oldTrainData)
    }

    function editForce(event, i) {
        let value = +event.target.value

        checkValue(value, event)

        let oldTrainData = { ...trainData }
        oldTrainData.characteristics[i].force = value
        setTrainData(oldTrainData)
    }

    function editSpeed(event, i) {
        let value = +event.target.value

        checkSpeedValue(value, event)

        let oldTrainData = { ...trainData }
        oldTrainData.characteristics[i].speed = value
        setTrainData(oldTrainData)
    }

    function checkValue(value, event) {
        if (value <= 0) {
            event.target.className = "wrong"
            if (sendData) {
                setSendData(!sendData)
            }
        } else {
            if (event.target.className === "wrong") {
                event.target.classList.remove("wrong")
                setSendData(!sendData)
            }
        }
    }
    function checkSpeedValue(value, event) {
        if (value < 0) {
            event.target.className = "wrong"
            if (sendData) {
                setSendData(!sendData)
            }
        } else {
            if (event.target.className === "wrong") {
                event.target.classList.remove("wrong")
                setSendData(!sendData)
            }
        }
    }

    function send() {
        let trainData = { ...train }
        let final = trainData.characteristics.sort((a, b) => a.speed - b.speed)
        console.log(final)
    }


    return <>
        {
            trainData
                ? <div className={t2.container2}>
                    <table className={t2.table2}>
                        <thead>
                            <tr>
                                <th colSpan='3'>
                                    Характеристики {trainData.name}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={t2.descr}>
                                <td className={t2.head}>Ток двигателя</td>
                                <td className={t2.head}>Сила тяги</td>
                                <td className={t2.head}>Скорость</td>
                            </tr>
                            {
                                trainData.characteristics.map((e, i) =>
                                    <tr key={i}>
                                        <td>
                                            <input
                                                value={e.engineAmperage}
                                                onChange={(event) => editAmper(event, i)} type="number"
                                                min={1}

                                            />

                                        </td>
                                        <td>
                                            <input value={e.force} onChange={(event) => editForce(event, i)} type="number" min={1} step={.01}></input>
                                        </td>
                                        <td>
                                            <input
                                                value={e.speed}
                                                onChange={(event) => editSpeed(event, i)}
                                                type="number"
                                                min={1}></input>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>

                    <button disabled={!sendData} onClick={send}>Отправить данные</button>
                </div>

                : <div className={t2.nodata}>
                    "Выберите поезд"
                </div>

        }
    </>
}