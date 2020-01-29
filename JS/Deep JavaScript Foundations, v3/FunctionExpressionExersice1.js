function getStudentById(studentId) {
    return studentRecords.find(function matchId(record) {
        return record.id == studentId;
    });
}

function printRecords(recordIds) {
    var records = recordIds.map(getStudentById);

    records.sort(function sortByName(r1, r2) {
        if (r1.name < r2.name)
            return -1;
        else if (r1.name > r2.name)
            return 1;
        else
            return 0;
    });

    records.forEach(function printRecords(record) {
        console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
    });
}

function paidStudentsToEnroll() {
    var idsToEnroll = studentRecords.filter(function needsToEnroll(record) {
        return (record.paid && !currentEnrollment.includes(record.id))
    })
        .map(function getStudentId(record) {
            return record.id;
        })

    return [...currentEnrollment, ...idsToEnroll];
}

function remindUnpaid(recordIds) {
    printRecords(recordIds.filter(function isUnpaid(studentId) {
        var record = getStudentById(studentId);
        return !record.paid;
    }));
}


// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
    { id: 313, name: "Frank", paid: true, },
    { id: 410, name: "Suzy", paid: true, },
    { id: 709, name: "Brian", paid: false, },
    { id: 105, name: "Henry", paid: false, },
    { id: 502, name: "Mary", paid: true, },
    { id: 664, name: "Bob", paid: false, },
    { id: 250, name: "Peter", paid: true, },
    { id: 375, name: "Sarah", paid: true, },
    { id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/