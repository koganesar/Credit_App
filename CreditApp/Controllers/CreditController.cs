using CreditApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace CreditApp.Controllers;

[ApiController]
[Route("[controller]")]
public class CreditController : ControllerBase
{
    private readonly CreditService _creditService;
    private readonly CriminalStatusService _criminalStatusService;

    public CreditController(CreditService creditService, CriminalStatusService criminalStatusServiceStatusService)
    {
        _creditService = creditService;
        _criminalStatusService = criminalStatusServiceStatusService;
    }

    [HttpPost]
    public async Task<IActionResult> GetCredit([FromBody] PersonInfo personInfo)
    {
        if (await _criminalStatusService.IsCriminal(personInfo) == (personInfo.CriminalRecordInfo == PersonInfo.CriminalRecordInfoEnum.No))
            return Ok(new Result
            {
                Status = false,
                Score = null,
                Message = "Нет, не одобрено",
                Percent = null
            });

        var score = _creditService.CalculateScore(personInfo);
        if (score <= 80)
            return Ok(new Result
            {
                Status = false,
                Score = score,
                Message = "Мы вам не доверяем",
                Percent = null
            });

        var percent = _creditService.CalculatePercent(score);
        return Ok(new Result
        {
            Status = true,
            Score = score,
            Message = "Кредит одобрен",
            Percent = percent
        });
    }
}
