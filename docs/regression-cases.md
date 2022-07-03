# Regression cases

Prepared for this change. **Not executed.** Tests, manual checks, lint and builds require explicit user authorization. Use isolated fixtures; never run destructive cases against production.

| Case | Input or setup | Expected outcome |
| --- | --- | --- |
| Absent product | Remove an object not contained in cart; delete index -1/out of bounds | Cart remains unchanged; returns false |
| Quantity | Set amount to 0,-1,1.5,NaN | Rejected; previous amount retained |
| Price | Price=0.1 amount=3 | Line total=0.30 |
| Identity | Two foods have same name but different price | Distinct entries match name+price identity |

Automated cases are prepared in `tests/regression.test.mjs`. After authorization, run `node --test tests/regression.test.mjs`. They have not been executed.

Additional prepared UI cases: add two distinct products then delete the first; model and DOM both retain only the second. Increment/decrement quantity and verify model-based total and header count. Re-add products repeatedly and verify one increment per click or keyboard action. Not executed.

## Additional cases (not executed)

| Case | Input or setup | Expected outcome |
| --- | --- | --- |
| Unsafe money | Null/blank price or a quantity producing unsafe cents | Invalid price or total rejected |
