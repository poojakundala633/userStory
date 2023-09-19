package ChristmasLights;

public class LightsGrid implements Lights {
    int lights[][];

    public LightsGrid() {
        lights = new int[1000][1000];
    }

    @Override
    public void lightsOn(int x1, int y1, int x2, int y2) {
        for(int i=x1; i<=x2; i++) {
            for(int j=y1; j<=y2; j++) {
                lights[i][j] += 1;
            }
        }
    }

    @Override
    public void lightsOff(int x1, int y1, int x2, int y2) {
        for(int i=x1; i<=x2; i++) {
            for(int j=y1; j<=y2; j++) {
                if(lights[i][j] > 0) {
                    lights[i][j] -= 1;
                }
            }
        }
    }

    @Override
    public void toggleLights(int x1, int y1, int x2, int y2) {
        for(int i=x1; i<=x2; i++) {
            for(int j=y1; j<=y2; j++) {
                lights[i][j] += 2;
            }
        }
    }

    @Override
    public int countLights() {
        int count = 0;

        for(int i=0; i<lights.length; i++) {
            for(int j=0; j<lights.length; j++) {
                count += lights[i][j];
            }
        }

        return count;
    }

    @Override
    public void turnOff(int x1, int y1, int x2, int y2) {
        for(int i=x1; i<=x2; i++) {
            for(int j=y1; j<=y1; j++) {
                if(lights[i][j] > 0) {
                    lights[i][j] -= 1;
                }
            }
        }
    }

    @Override
    public void turnOn(int x1, int y1, int x2, int y2) {
        for(int i=x1; i<=x2; i++) {
            for(int j=y1; j<=y1; j++) {
                lights[i][j] += 1;
            }
        }
    }

    @Override
    public void toggleLight(int x1, int y1, int x2, int y2) {
        for(int i=x1; i<=x2; i++) {
            for(int j=y1; j<=y1; j++) {
                lights[i][j] += 2;
            }
        }
    }
}