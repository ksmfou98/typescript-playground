{
    /**
     *  Union Types : OR로 이해하면 된다.
     */

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }

    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    // function: login -> succes, fail

    type SuccesState = {
        response: {
            body: string;
        };
    };

    type FailState = {
        reason: string;
    };

    function login1() : SuccesState | FailState{ 
        return {
            response: {
                body: "loggin in!",
            },
        }
    }

    type LoginState = SuccesState | FailState;

    function printLoginState1(state: LoginState){
        if ('response' in state){
            console.log(state.response.body)
        }else{
            console.log(state.reason)
        }
    }


}