//包装函数
module.exports = function (grunt) {
    //任务配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        uglify : {
            build : {
                src : 'src.js',
                dest : 'dest.js'
            }
        }
    });

    //任务加载
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //注册任务
    grunt.registerTask('default', ['uglify']);
};