namespace TestProject.Server.Model
{
    public class ConfigAut
    {
        public string Id { get; set; }
        public string Issuer { get; set; }
        public string Value { get; set; }
        public int Length { get; set; }
        public byte[] GetBytesKey()
        {
            return Convert.FromBase64String(Value);
        }
    }


   
}
