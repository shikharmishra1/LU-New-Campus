using LU_New_Campus.Models;
using LU_New_Campus.Services;
using MongoDB.Bson.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews().AddJsonOptions(
        options => options.JsonSerializerOptions.PropertyNamingPolicy = null); ;
builder.Services.Configure<LUNC_DB_Settings>(
builder.Configuration.GetSection("LU_NC_DB"));
builder.Services.AddSingleton<LUNC_Service>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{

    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
