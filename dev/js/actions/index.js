export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export function login(name) {
	console.log("in login");
	  return {
	    type:'LOGIN',// [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
	    payload: name,
	    promise: (client) => client.post('/login', {
	      data: {
	        name: name
	      }
	    })
	  };
	}