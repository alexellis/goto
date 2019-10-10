"use strict"

module.exports = (event, context) => {
    let redirect;

    if(event.path == "/home") {
        redirect = "https://www.alexellis.io/";
    } else if(event.path == "/sponsors" || event.path == "/insiders") {
        redirect = "https://github.com/users/alexellis/sponsorship";
    } else if(event.path == "/inlets") {
        redirect = "https://inlets.dev";
    } else if(event.path == "/k3sup") {
        redirect = "https://k3sup.dev";
    } else if(event.path == "/blog") {
        redirect = "https://blog.alexellis.io/";
    }

    process.stderr.write(event.path)

    if(!redirect) {
        return context
            .status(400)
            .fail("Unknown short URL");
    }
    context
        .status(302)
        .headers({"location": redirect})
        .succeed();
}
