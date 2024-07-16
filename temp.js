const names = ["athul", "rahul", "abhinav", "anjima"];
console.log("using foreach");
names.forEach((name) => {
  console.log(name);
});
console.log("using map");
names.map((m)=>{
    console.log(m);
})

const filtered=names.filter((f)=>{
    if (f==="athul") {
        return f;
    }
    else{
        return false
    }
})
console.log("filtreeed",filtered);