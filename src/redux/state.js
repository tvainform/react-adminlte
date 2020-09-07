const ADD_INCIDENT = 'ADD-INCIDENT';
const UPDATE_NEW_INCIDENT_TEXT = 'UPDATE-NEW-INCIDENT-TEXT';

let store = {
    _state: {
        personsData: [
            {id: 1, name: "Вадим", profession: "Начальник отдела", about: "О себе"},
            {id: 2, name: "Дима", profession: "Приборист", about: "О себе"},
            {id: 3, name: "Сергей", profession: "Приборист", about: "О себе"}
        ],
        newFieldsText: "",
        incidentTable: {
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
                }, {
                    id: 2,
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
                }, {
                    id: 3,
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
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.callSubscriber = observer; //pattern observer наблюдатель
    },
    _clearField(field) {
        this._state.field = "";
    },
    dispatch(action) {
        if (action.type === ADD_INCIDENT) {
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
                d9: this._state.newFieldsText,
                d10: "",
            };
            this._state.incidentTable.incidentData.push(newIncident);
            //this._clearField(this._state.newFieldsText);
            this._state.newFieldsText = "";
            this.callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_INCIDENT_TEXT) {
            this._state.newFieldsText = action.newText;
            this.callSubscriber(this._state);
        } else if (action.type === 'CLEAR-FIELD') {
            this._state.field = "";
        }
    }
}
export const addIncidentActionCreator = () => ({type: ADD_INCIDENT})
export const updateNewIncidentTextActionCreator = (text) => ({type: UPDATE_NEW_INCIDENT_TEXT, newText: text})

export default store;
window.state = store;
