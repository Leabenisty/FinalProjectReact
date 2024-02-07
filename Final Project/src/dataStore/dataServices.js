import { action, computed, makeObservable, observable, runInAction } from 'mobx';
const baseUrl = "http://localhost:8787"
class DataServices {
    list = [{
        id:"1",
        name: "Chocolate Bar",
        adress:"ghh",
        
       },{
        id:"2",
        name: "tru",
        adress:"exle",
       }];
    constructor() {
        makeObservable(this, {
            list: observable,
            init: action,
            getAllService: computed,
        }),
        this.init();
    }

    async init() {
        try {
            const res = await fetch(baseUrl + "/services");
            const data = await res.json();
            if (data.length !== 0)
                runInAction(() => {
                    this.list = data ;
                });
        }
        catch (err) {
            console.log(err)
        }

    }


    get getAllService() {
        return this.list
    }
}
const singleton = new DataServices();
export default singleton;