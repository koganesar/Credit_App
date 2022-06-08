namespace CreditApp.Services;

public class CriminalStatusService
{
    public async Task<bool> IsCriminal(PersonInfo personInfo) =>
        personInfo.Name == "Криминал";
}
