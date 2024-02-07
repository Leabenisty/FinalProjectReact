import {makeObservable, observable, computed, action, runInAction} from 'mobx'
class apponitment{
list=[];
    constructor()
    {
        makeObservable(this, {
            list: observable,
            initData: action,
            updateProduct: action,
            createProduct: action,
            deleteProduct: action,
            getMeetings: computed,
            getSales: computed,
        });
        this.initData();
    }

    async initData(){
        try{
            const res = await fetch('http://localhost:8787/appointment');
            const data = await res.json();
            
            runInAction(()=>{
                this.list = data.post;
            });
        }
        catch(err){
            console.log(err);
        }
        
    }

get getMeetings() {
   return this.list; 
}




}



