import * as schema from "../main/index";
import * as validation from "@anyhowstep/data-validation";
import * as tape from "tape";

const domain = "https://jsonplaceholder.typicode.com";
const api = new schema.Api({
    domain : domain,
});
tape("API", async (t) => {
    class Parameter {
        @schema.assert(validation.Number.assertNaturalNumber)
        id : number = 1;
    }
    class Body {
        @schema.assert(validation.Number.assertNaturalNumber)
        userId : number = 1;
        @schema.assert(validation.String.assertNonEmpty)
        title : string = "-";
        @schema.assert(validation.String.assertNonEmpty)
        body : string = "-";
    }
    class Title {
        @schema.assert(validation.String.assertNonEmpty)
        title : string = "-";
    }
    //https://github.com/typicode/jsonplaceholder/issues/60
    class Response {
        @schema.assert(schema.maybe(validation.Number.assertNaturalNumber))
        userId? : null|number;
        @schema.assert(schema.maybe(validation.Number.assertNaturalNumber))
        id? : null|number;
        @schema.assert(schema.maybe(validation.String.assertNonEmpty))
        title? : null|string;
        @schema.assert(schema.maybe(validation.String.assertNonEmpty))
        body? : null|string;
    }
    class Comment {
        @schema.assert(validation.Number.assertNaturalNumber)
        postId : number = 1;
        @schema.assert(validation.Number.assertNaturalNumber)
        id : number = 1;
        @schema.assert(validation.String.assertNonEmpty)
        name : string = "-";
        @schema.assert(validation.String.assertEmail)
        email : string = "-@-";
        @schema.assert(validation.String.assertNonEmpty)
        body : string = "-";
    }
    class CommentQuery {
        @schema.assert(validation.Number.assertNaturalNumber)
        postId : number = 1;
    }
    const fetch = schema.Route.Create()
        .append("/posts")
        .appendParam("id", /\d+/)
        .param(Parameter)
        .response(Response);
    await api.request(fetch)
        .setParam({
            id : 1
        })
        .send()
        .then((res) => {
            console.log(res.data);
            t.pass();
        })
        .catch((err) => {
            console.error(err);
            throw err;
        })
    const fetchAll = schema.Route.Create()
        .append("/posts")
        .responseDelegate(schema.array(schema.nested(Response)));
    await api.request(fetchAll)
        .send()
        .then((res) => {
            console.log(res.data);
            t.pass();
        })
        .catch((err) => {
            console.error(err);
            throw err;
        })
    const insert = schema.Route.Create()
        .append("/posts")
        .body(Body)
        .response(Response);
    await api.request(insert)
        .setBody({
            userId : 1,
            title  : "My Title",
            body   : "My Body",
        })
        .send()
        .then((res) => {
            console.log(res.data);
            t.pass();
        })
        .catch((err) => {
            console.error(err);
            throw err;
        })
    const del = schema.Route.Create()
        .append("/posts")
        .appendParam("id", /\d+/)
        .param(Parameter)
        .method("DELETE");
    await api.request(del)
        .setParam({
            id : 1
        })
        .send()
        .then((res) => {
            console.log(res.data);
            t.pass();
        })
        .catch((err) => {
            console.error(err);
            throw err;
        })
    const put = schema.Route.Create()
        .append("/posts")
        .appendParam("id", /\d+/)
        .param(Parameter)
        .body(Response)
        .response(Response)
        .method("PUT");
    await api.request(put)
        .setParam({
            id : 1
        })
        .setBody({
            id     : 1,
            userId : 2,
            title  : "test",
            body   : "test",
        })
        .send()
        .then((res) => {
            console.log(res.data);
            t.pass();
        })
        .catch((err) => {
            console.error(err);
            throw err;
        })
    const patch = schema.Route.Create()
        .append("/posts")
        .appendParam("id", /\d+/)
        .param(Parameter)
        .body(Title)
        .response(Response)
        .method("PATCH");
    await api.request(patch)
        .setParam({
            id : 1
        })
        .setBody({
            title  : "test",
        })
        .send()
        .then((res) => {
            console.log(res.data);
            t.pass();
        })
        .catch((err) => {
            console.error(err);
            throw err;
        })
    const fetchComments = schema.Route.Create()
        .append("/comments")
        .query(CommentQuery)
        .responseDelegate(schema.array(schema.nested(Comment)));
    await api.request(fetchComments)
        .setQuery({
            postId : 1
        })
        .send()
        .then((res) => {
            console.log(res.data);
            t.pass();
        })
        .catch((err) => {
            console.error(err);
            throw err;
        })
    t.end();
});
