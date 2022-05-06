
if [%1]==[pub] (
  if [%2]==[] (
    npx ts-node --project precode\tsconfig.json precode\publish.ts
  ) else (
    npx ts-node --project precode\tsconfig.json precode\publish.ts -c \"%2 %3 %4 %5 %6 %7 %8 %9\"
  )
)
