function ObjectSerializer()
{
    this.serialize = function(object)
    {
        return JSON.stringify(object, function(key, value)
        {
            if (typeof value === 'function')
                return value.toString();
            return value;
        });
    }
 
    this.unserialize = function(string)
    {
        var object = JSON.parse(string, function(key, value)
        {
            if (typeof value === 'string')
                if (value.match(/function( *)\((.*?)\)/gi))
                    return eval('('+value+')');
            return value;
        });
        return object;
    }
}
