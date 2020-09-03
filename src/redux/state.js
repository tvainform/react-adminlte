import React from "react";

let importxlsx = ()=>
{
    const xlsx = require("xlsx");
    const wb = xlsx.readFile("file.xlsx", {type: "binary"});
    const ws = wb.Sheets["АСУТП"];

    const incidentList = xlsx.utils.sheet_to_json(ws,{editable: true});
    console.log(data);
return incidentList;
};

let state = {
    personsData: [
        {id: 1, name: "Вадим", profession: "Начальник отдела", about: "О себе"},
        {id: 2, name: "Дима", profession: "Приборист", about: "О себе"},
        {id: 3, name: "Сергей", profession: "Приборист", about: "О себе"}
    ],
    incidentDataHeader: [
        {
            c1:"Номер заявки",
            c2:"Статус",
            c3:"Подразделение инициатора",
            c4:"ФИО Инициатора",
            c5:"Дата регистрации",
            c6:"Исполнитель",
            c7:"Дата решения",
            c8:"Краткое описание",
            c9:"Подробное описание",
            c10:"Решение"
        }
    ],
    importxlsx;
}
export default state;
