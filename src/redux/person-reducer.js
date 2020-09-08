let initialState = {
    newPersonText: "",
    personsDataHeader: [
        {
            name: "Номер заявки",
            profession: "Статус",
            about: "Подразделение инициатора",
        }],
    personData: [
        {
            id: 1,
            name: "Вадим",
            profession: "Начальник отдела",
            about: "О себе"
        }]
}

const personReducer = (state = initialState, action) => {

    return state;
}
export default personReducer;
