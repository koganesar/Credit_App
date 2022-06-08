namespace CreditApp;

public class PersonInfo
{
    public string Surname { get; set; }
    public string Name { get; set; }
    public int Series { get; set; }
    public int Number { get; set; }
    public string IssuedBy { get; set; }
    public DateTime DateOfIssue { get; set; }
    public string Registration { get; set; }
    public int Age { get; set; }

    public enum CriminalRecordInfoEnum
    {
        No = 1,
        Yes = 2
    }

    public CriminalRecordInfoEnum CriminalRecordInfo { get; set; }
    public int Amount { get; set; }

    public enum PurposeEnum
    {
        ConsumerLoan = 1,
        RealEstate = 2,
        ReCrediting = 3
    }

    public PurposeEnum Purpose { get; set; }

    public enum BailEnum
    {
        NoBail = 1,
        RealEstate = 2,
        Car = 3,
        Guarantee = 4
    }

    public BailEnum Bail { get; set; }
    public int AgeOfCar { get; set; }

    public enum OtherLoansEnum
    {
        No = 1,
        Yes = 2
    }

    public OtherLoansEnum AvailabilityOfOtherLoans { get; set; }

    public enum EmploymentEnum
    {
        Tk = 1,
        Ip = 2,
        Freelance = 3,
        Pensioner = 4,
        Unemployed = 5
    }

    public EmploymentEnum Employment { get; set; }
}
