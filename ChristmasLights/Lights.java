package ChristmasLights;

public interface Lights extends LightsOn,LightsOff,ToggleLights,LightCount {


    void lightsOn(int startRow, int startCol, int endRow, int endCol);

    void lightsOff(int startRow, int startCol, int endRow, int endCol);

    void toggleLights(int startRow, int startCol, int endRow, int endCol);
}
