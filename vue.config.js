module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/helloworld/'
        : '/',
};
//see https://cli.vuejs.org/guide/deployment.html#github-pages