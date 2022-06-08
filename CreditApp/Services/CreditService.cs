namespace CreditApp.Services;

public class CreditService
{
    public int CalculateScore(PersonInfo personInfo)
    {
        var points = 0;

        switch (personInfo.Age)
        {
            case >= 21 and <= 28:
                switch (personInfo.Amount)
                {
                    case < 1000000:
                        points += 12;
                        break;
                    case >= 1000000 and <= 3000000:
                        points += 9;
                        break;
                }

                break;
            case >= 29 and <= 59:
                points += 14;
                break;
            case >= 60 and <= 72:
                if (personInfo.Bail != PersonInfo.BailEnum.NoBail)
                    points += 8;
                break;
        }

        if (personInfo.CriminalRecordInfo == PersonInfo.CriminalRecordInfoEnum.No)
            points += 15;

        points += personInfo.Employment switch
        {
            PersonInfo.EmploymentEnum.Tk => 14,
            PersonInfo.EmploymentEnum.Ip => 12,
            PersonInfo.EmploymentEnum.Freelance => 8,
            PersonInfo.EmploymentEnum.Pensioner => personInfo.Age < 70 ? 5 : 0,
            PersonInfo.EmploymentEnum.Unemployed => 0,
            _ => throw new ArgumentOutOfRangeException()
        };

        points += personInfo.Purpose switch
        {
            PersonInfo.PurposeEnum.ConsumerLoan => 14,
            PersonInfo.PurposeEnum.RealEstate => 8,
            PersonInfo.PurposeEnum.ReCrediting => 12,
            _ => throw new ArgumentOutOfRangeException()
        };

        points += personInfo.Bail switch
        {
            PersonInfo.BailEnum.RealEstate => 14,
            PersonInfo.BailEnum.Car => personInfo.AgeOfCar < 3 ? 8 : 3,
            PersonInfo.BailEnum.Guarantee => 12,
            PersonInfo.BailEnum.NoBail => 0,
            _ => throw new ArgumentOutOfRangeException()
        };

        points += personInfo.AvailabilityOfOtherLoans switch
        {
            PersonInfo.OtherLoansEnum.No => personInfo.Purpose == PersonInfo.PurposeEnum.ReCrediting ? 0 : 15,
            PersonInfo.OtherLoansEnum.Yes => 0,
            _ => throw new ArgumentOutOfRangeException()
        };

        switch (personInfo.Amount)
        {
            case <= 1000000:
                points += 12;
                break;
            case > 1000000 and <= 5000000:
                points += 14;
                break;
            case > 5000000 and <= 10000000:
                points += 8;
                break;
        }

        return points;
    }

    public decimal CalculatePercent(int points)
    {
        return points switch
        {
            < 84 => 30,
            >= 84 and < 88 => 26,
            >= 88 and < 92 => 22,
            >= 92 and < 96 => 19,
            >= 96 and < 100 => 15,
            >= 100 => 12.5m
        };
    }
}
