import mockAxios from 'axios';
 
import { fetchData } from '../src/utils/fetchData';
import { tempData } from './tempData'

jest.mock('axios'); 

test("fetches sımpsons from API", async ()=>{
    mockAxios.get.mockImplementationOnce(()=>{
       return Promise.resolve({
            data:[tempData]
        })
    })
    const simpsons = await fetchData();
    expect(simpsons).toEqual([tempData]);
})


