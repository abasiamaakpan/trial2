FlowRouter.route("/", {
    name: 'Home',
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.Home />);
    }
});

FlowRouter.route("/login", {
    name: "Login",
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.UserLogin />);
    }
});

FlowRouter.route("/register", {
    name:"Register",
    subscriptions(params){

    },
    action(params){
        renderMainLayoutWith(<C.UserRegister/>);
    }
});

function renderMainLayoutWith(component) {
    ReactLayout.render(C.MainLayout, {
        header: <C.MainHeader />,
        content: component,
        footer: <C.MainFooter />
    });
}