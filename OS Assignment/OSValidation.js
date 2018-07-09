const osconst = require('os');

const getCpus = () => {
    let cpuDetails = osconst.cpus();
    // console.log(cpuDetails);
    return cpuDetails;
}

const checkMyMachineIsEligibleOrNot = (iAmCallback) => {
    // console.log(getCpus().length);
    let myObj = new Object();

    if (getCpus().length > 2 && getTotalMem() > 4) {

        console.log("CPU & Memory case is satisfied");
        myObj.status = true;
        myObj.message = "CPU & Memory case is satisfied ";
        // setTimeout(() => {
        iAmCallback(myObj);
        // }, 1000)

    } else {
        console.log("CPU & Memory case is not satisfied");
        myObj.status = false;
        myObj.message = "CPU & Memory case not is satisfied ";
        iAmCallback(myObj);
    }
}

const getTotalMem = () => {
        let totMem = osconst.totalmem();
        let memInGb = totMem / (1024 * 1024 * 1024)
        console.log(memInGb)
        return memInGb;
    }
    // console.log("abcd")
    // getTotalMem()
module.exports = {
        validation: checkMyMachineIsEligibleOrNot,
        getCpus: getCpus
    }
    // getTotalMem();