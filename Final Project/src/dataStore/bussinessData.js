import { action, computed, makeObservable, observable, runInAction } from 'mobx';
const baseUrl = "http://localhost:8787"
class BussinesData {
    data = {
        id: "6",
        name: "bussiness",
        adress: "ghh"
    };
    constructor() {
        makeObservable(this, {
            data: observable,
            init: action,
            // putData: action,
            addData: action,
            getData: computed,

        }),
            this.init();
    }

    async init() {
        try {
            const res = await fetch(baseUrl + "/businessData");
            const data = await res.json();
            if (data.length !== 0)
                runInAction(() => {
                    this.list = data;
                });
        }
        catch (err) {
            console.log(err)
        }

    }


    get getData() { 
        console.log(this.data)
        return this.data
       

    }
    async addData(newData) {
        {
            try {
                const res = await fetch(baseUrl + '/businessData', {
                    method: 'POST',
                    body: JSON.stringify({
                        Id: this.data.length++,
                        title: newData.title,
                        body: newData.body,
                        userId: newData.userId
                    })
                })
                const data = await res.json();
                console.log(data, "data")
                this.data=(data)
    
            }
            catch (err) { console.log(err) }
        }
    }
}
const singleton = new BussinesData();
export default singleton;