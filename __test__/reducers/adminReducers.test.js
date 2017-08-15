import base from "../../client/src/redux/reducer/reducers/Admin/base/Index"



describe('request to Reducer',()=>{
    it('fetch',()=>{
        expect(base(undefined,{type:'HANDLE_TAP_HOME',open:true})).toEqual({
            open:true
        })
    })
})