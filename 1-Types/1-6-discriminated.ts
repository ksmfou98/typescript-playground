{
    // function: login -> succes, fail

    type SuccesState = {
        result: 'success';
        response: {
            body: string;
        };
    };

    type FailState = {
        result: 'fail';
        reason: string;
    };

    function login() : SuccesState | FailState{ 
        return {
            result:'success',
            response: {
                body: "loggin in!",
            },
        }
    }

    type LoginState = SuccesState | FailState;

    function printLoginState(state: LoginState){
        if (state.result === 'success'){
            console.log(state.response.body)
        }else{
            console.log(state.reason)
        }
    }
}