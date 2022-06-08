import React, {useState} from 'react';
import {Alert, Button, Form, Input} from "reactstrap";
import PersonInfo from "../interfaces/PersonInfo";
import Result from "../interfaces/Result";

const PersonForm = () => {
    const [personInfo, setPersonInfo] = useState<PersonInfo>({
        surname: null,
        name: null,
        series: null,
        number: null,
        issuedBy: null,
        dateOfIssue: null,
        registration: null,
        age: null,
        criminalRecordInfo: 1,
        amount: null,
        purpose: 1,
        bail: 1,
        ageOfCar: 1,
        availabilityOfOtherLoans: 1,
        employment: 1,
    });

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(personInfo);
        fetch('/credit',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(personInfo)
            })
            .then(res => res.json())
            .then(res => {
                const result = res as Result
                alert(JSON.stringify(result))
            })
    }

    return <div className="App">
        <h2>Анкета</h2>
        <Form onSubmit={onSubmit}>
            Фамилия
            <Input placeholder="Фамилия" type="text" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.surname = e.target.value;
                    return prevState;
                })}
                   required pattern="([А-Я][а-я]+"/>
            Имя
            <Input placeholder="Имя" type="text" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.name = e.target.value;
                    return prevState;
                })}
                   required pattern="([А-Я][а-я]+"/>
            Cерия
            <Input placeholder="Cерия" type="number" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.series = Number.parseInt(e.target.value);
                    return prevState;
                })}
                   required min={1000} max={9999}/>
            Номер
            <Input placeholder="Номер" type="number" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.number = Number.parseInt(e.target.value);
                    return prevState;
                })}
                   required min={100000} max={999999}/>
            Кем выдан
            <Input placeholder="Кем выдан" type="text" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.issuedBy = e.target.value;
                    return prevState;
                })}
                   required minLength={10}/>
            Дата выдачи
            <Input placeholder="Дата выдачи" type="date" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.dateOfIssue = new Date(e.target.value);
                    return prevState;
                })}
                   required min='1900-01-01' max='2008-01-01'/>
            Информация о прописке
            <Input placeholder="Информация о прописке" type="text" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.registration = e.target.value;
                    return prevState;
                })}
                   required minLength={10}/>
            Возраст
            <Input placeholder="Возраст" type="number" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.age = Number.parseInt(e.target.value);
                    return prevState;
                })}
                   required min={18} max={120}/>
            Сведения о судимости
            <Input placeholder="Сведения о судимости" type="select" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.criminalRecordInfo = Number.parseInt(e.target.value);
                    return prevState;
                })}>
                <option value="1">Не было</option>
                <option value="2">Было</option>
            </Input>
            Сумма кредита
            <Input placeholder="Сумма кредита" type="number" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.amount = Number.parseFloat(e.target.value);
                    return prevState;
                })}
                   required min={1000} max={100000000}/>
            Цель
            <Input type="select" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.purpose = Number.parseInt(e.target.value);
                    return prevState;
                })}>
                <option value="1">Потребительский кредит</option>
                <option value="2">Недвижимость</option>
                <option value="3">Перекредитование</option>
            </Input>
            Залог
            <Input type="select" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.bail = Number.parseInt(e.target.value);
                    return prevState;
                })}>
                <option value="1">Нет залога</option>
                <option value="2">Недвижимость</option>
                <option value="3">Автомобиль</option>
                <option value="4">Поручительство</option>
            </Input>
            Возраст автомобиля
            <Input placeholder="Возраст автомобиля" type="number" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.ageOfCar = Number.parseInt(e.target.value);
                    return prevState;
                })}/>
            Наличие других кредитов
            <Input type="select" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.availabilityOfOtherLoans = Number.parseInt(e.target.value);
                    return prevState;
                })}>
                <option value="1">Нет</option>
                <option value="2">Есть</option>
            </Input>
            Трудоустройство
            <Input type="select" onChange={e =>
                setPersonInfo(prevState => {
                    prevState.employment = Number.parseInt(e.target.value);
                    return prevState;
                })}>
                <option value="1">По ТК</option>
                <option value="2">ИП</option>
                <option value="3">Без ТК</option>
                <option value="4">Пенсионер</option>
                <option value="5">Бомж</option>
            </Input>
            <Button>Отправить</Button>
        </Form>
    </div>
}
export default PersonForm;