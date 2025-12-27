local HttpService = game:GetService("HttpService")
local API_URL = "https://w4-team.vercel.app/api/theforge"


local function sendToAPI(data)
    local success, result = pcall(function()
        return HttpService:PostAsync(
            API_URL,
            HttpService:JSONEncode(data),
            Enum.HttpContentType.ApplicationJson,
            false
        )
    end)

    if not success then
        warn("HTTP Error:", result)
    end
end
