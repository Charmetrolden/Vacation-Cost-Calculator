public class Program {

    public double main(String transportMethod, double distance){


        //Create a TransportationMethod instance based on the transport method
        TransportationMethod transportationMethodInstance = createTransportationMethod(transportMethod);

        //Create VacationCostCalculator instance with the distance and transportation method
        VacationCostCalculator calculator = new VacationCostCalculator(distance , transportationMethodInstance);

        //Calculate the cost of vacation
        double result = calculator.costOfVacation();
        return result;
    }

    // Factory method to create TransportationMethod instance based on the provided transport method
    private TransportationMethod createTransportationMethod(String transportMethod) {
        switch (transportMethod) {
            case "Car":
                return new CarTransportation();
            case "Plane":
                return new PlaneTransportation();
            default:
                throw new UnsupportedOperationException("Transportation method is not supported.");
        }
    }
}


/* *** Comments **
This pattern si called the Strategy pattern and could also be used in e-commerce for implementing different payment methods.
*/ 
