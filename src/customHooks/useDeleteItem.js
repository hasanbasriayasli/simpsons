import useStorage from './useStorage';
const useDeleteItem=(setState,state)=>{
    const {addStore}= useStorage();
    return (id)=>{
        const newState = state.filter(item=>item.id!==id);
        setState(newState);
        addStore(newState);
    }
}
export default useDeleteItem