public class VacationCostCalculator {
    private double distanceToDestination;
    private TransportationMethod transportationMethod;

    public VacationCostCalculator(double distance, TransportationMethod transportationMethod) {
        this.distanceToDestination = distance;
        this.transportationMethod = transportationMethod;
    }

    public double costOfVacation() {
        return transportationMethod.calculateCost(distanceToDestination);
    }
}
