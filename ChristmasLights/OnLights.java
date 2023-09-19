package ChristmasLights;

public class OnLights implements LightsOn {
    @Override
    public void turnOn(int x1,int y1,int x2,int y2) {
        System.out.println("Turning on lights");
    }
}
