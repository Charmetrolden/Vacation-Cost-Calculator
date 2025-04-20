public class CarTransportation implements TransportationMethod {
    @Override
    public double calculateCost(double distance) {
        return distance * 1;
    }
}
