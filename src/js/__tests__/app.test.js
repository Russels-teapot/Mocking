import {fetchData} from "../http.js";
import {getLevel} from "../app.js";

jest.mock('../http')

test('get level', ()=>{
    const response = {status:'ok', level:2}
    fetchData.mockReturnValue(response);
    getLevel(1);
    expect(getLevel).toReturn(`Ваш текущий уровень: ${response.level}`)
})

test('get level', ()=>{
    const response = {}
    fetchData.mockReturnValue(response);
    getLevel(1);
    //expect(getLevel).toBeCalledWith(`https://server/user/1`)
    expect(getLevel).toReturn(`Информация об уровне временно недоступна`)
})
