#sh runJshint.sh;
cd app;
sh CompileTemplates.sh;
sh ../runJshint.sh;
cd fieldTypes;
sh ../CompileTemplates.sh;
sh ../../runJshint.sh;
