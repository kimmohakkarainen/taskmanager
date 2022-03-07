const initialState = {
  person: { person_id: 1, username: "admin", fullname: "Administrator " },
  helloWorld: "",
  menubar: {
  '1':{ title: "Transval", path: "/content/1", sidebar: [
  	{ path: "/content/1", title: "Overview", icon: "IconEmployees" },
  	{ path: "/content/1/1", title: "Basware", icon: "IconChart" },
  	{ path: "/content/1/2", title: "Nomentia", icon: "IconShoppingCart" },
  	{ path: "/content/1/3", title: "Reuters", icon: "IconEmptyDoc" },
  	{ path: "/content/1/4", title: "Logius", icon: "IconFullDoc" },
  	{ path: "/content/1/5", title: "Ropo", icon: "IconPile" }
  	]
  },

  '2': { title: "Baltics", path: "/content/2", sidebar: [
  	{ path: "/content/2/1", title: "First", icon: "IconEmployees" },
  	{ path: "/content/2/2", title: "Second", icon: "IconChart" },
  	]
  }
  
  },
  error: null
};

export default function PL2State(state = initialState, action) {
  console.log(action);
  if (action.type === "LOGOUT_SUCCEEDED") {
    return initialState;
  } else {
    const newState = Object.assign({}, state, { error: null }, action.payload);
    return newState;
  }
}
