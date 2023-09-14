package ChristmasLights;

public class OffLights  implements LightsOff {


    @Override
    public void turnOff(int x1,int y1,int x2,int y2) {
        System.out.println("Turning off lights");
    }
}
