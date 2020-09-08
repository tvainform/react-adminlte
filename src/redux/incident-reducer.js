const ADD_INCIDENT = 'ADD-INCIDENT';
const UPDATE_NEW_INCIDENT_TEXT = 'UPDATE-NEW-INCIDENT-TEXT';

let initialState = {
    newFieldsText: "",
    incidentTableHeader: [
        {
            h1: "Номер заявки",
            h2: "Статус",
            h3: "Подразделение инициатора",
            h4: "ФИО Инициатора",
            h5: "Дата регистрации",
            h6: "Исполнитель",
            h7: "Дата решения",
            h8: "Краткое описание",
            h9: "Подробное описание",
            h10: "Решение"
        }],
    incidentData: [
        {
            id: 1,
            d1: "REQ000000382042",
            d2: "Назначен",
            d3: "Установка низкотемпературной конденсации и ректификации НТКР-1",
            d4: "Кашпуренко Сергей Леонидович",
            d5: "16.07.2020  7:17:55",
            d6: "Шишкин Сергей Юрьевич",
            d7: "16.07.2020  7:36:15",
            d8: "НТКР-1,",
            d9: "Тех. объект (установка): НТКР-1, ГП\n" +
                "Тип оборудования КИП и АСУ: Другое\n" +
                "Позиция: Кондиционер\n" +
                "Позиция участвует в перечне СБ и ПАЗ?: Нет\n" +
                "Дополнительная информация: Не работает один из кондиционеров в контроллерной к.106. Ошибка Unit0/E6",
            d10: "Замена датчика. Датчик выдает сигнал на систему. Требуется проверка специалистами АСУТП.\n" +
                "Показания восстановили, позиция в работе."
        }]
}

const incidentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INCIDENT:
            let newIncident = {
                id: 4,
                d1: "",
                d2: "",
                d3: "",
                d4: "",
                d5: "",
                d6: "",
                d7: "",
                d8: "",
                d9: state.newFieldsText,
                d10: "",
            };
            state.incidentData.push(newIncident);
            state.newFieldsText = "";
            return state;
        case UPDATE_NEW_INCIDENT_TEXT:
            state.newFieldsText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addIncidentActionCreator = () => ({type: ADD_INCIDENT})
export const updateNewIncidentTextActionCreator = (text) => ({type: UPDATE_NEW_INCIDENT_TEXT, newText: text})

export default incidentReducer;
