window.BETA_sortChallenges = function(challenges)
{    
    var dict = {};    

    for (var i in challenges)
    {
        var chal = challenges[i];
        var category = chal["category"].trim()

        if (category == "Intro")
        {
            category = 0;
        }

        if (dict[category] == null)
        {
            dict[category] = [chal];
        }
        else
        {
            dict[category].push(chal);
        }
    }

    var reverseOutput = Array();

    for (var x in dict)
    {
        for (var y = dict[x].length-1; y>=0; y--)
        {
            reverseOutput.push(dict[x][y]);
        }
    }

    var output = Array();

    for (var z = reverseOutput.length-1; z>=0; z--)
    {
        output.push(reverseOutput[z]);
    }

    return output;
};
