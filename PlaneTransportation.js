public class PlaneTransportation implements TransportationMethod {
    @Override
    public double calculateCost(double distance) {
        return distance * 2;
    }
}
