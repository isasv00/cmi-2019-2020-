function Movie_OnStart(){
StackTrace="Al Iniciar";
SoundPlay("Lluvia",true);
VideoSetVolume("Video1",0);

}

function Frame__0_0(ID){
StackTrace="Escena 1 Fotograma 0";
Pause();

}

function Frame__1_0(ID){
StackTrace="Escena 2 Fotograma 0";
Pause();

}

function Sonidovideo_OnClick(){
StackTrace="Sonido video.Al Hacer Clic";
VideoSetVolume("Video1",10);
SoundPlay("Click",false);

}

function Sonidovideo_OnRelease(){
StackTrace="Sonido video.Al Liberar";
VideoSetVolume("Video1",0);
SoundPlay("Click",false);
}

function Pausarvideo_OnClick(){
StackTrace="Pausar video.Al Hacer Clic";
VideoPause("Video1");
SoundPlay("Click",false);
}

function Pausarvideo_OnRelease(){
StackTrace="Pausar video.Al Liberar";
VideoResume("Video1");
SoundPlay("Click",false);
}

function Iralsonido_OnClick(){
StackTrace="Ir al sonido.Al Hacer Clic";
GotoSceneName("Escena2");
SoundPlay("Click",false);
}

function Iralsonido_OnRelease(){
StackTrace="Ir al sonido.Al Liberar";
SoundPlay("Click",false);
}

function Botonsonido_OnClick(){
StackTrace="Boton sonido.Al Hacer Clic";
SoundPause("Lluvia");
SoundPlay("Click",false);
}

function Botonsonido_OnRelease(){
StackTrace="Boton sonido.Al Liberar";
SoundResume("Lluvia");
SoundPlay("Click",false);
}

function ToggleButton1_OnClick(){
StackTrace="ToggleButton1.Al Hacer Clic";
GotoSceneName("Escena1");
SoundPlay("Click",false);
}

function ToggleButton1_OnRelease(){
StackTrace="ToggleButton1.Al Liberar";
SoundPlay("Click",false);
}

