function S = Generating_rMatrix(ItemNo)

% define variables
%           rFileNo = 10;
ColumnNo = 8;
  KronNo = (ItemNo - mod(ItemNo, 3))/3;

% 8 column labels
Column_Question_id = 1; %
Column_Word_ID = 2; %
Column_Filler1_ID = 3; %
Column_Filler2_ID = 4; %
Column_CorrectA = 5; %
Column_Filler1_Pos = 6; %
Column_Filler2_Pos = 7; %
Column_Question_Type = 8; %

while 1
    Array_Qid = 1:ItemNo;
    
    % get the 3 rand arrays
    rand_Array_1 = randperm(ItemNo);    rand_Array_1 = rand_Array_1';
    rand_Array_2 = randperm(ItemNo);    rand_Array_2 = rand_Array_2';
    rand_Array_3 = randperm(ItemNo);    rand_Array_3 = rand_Array_3';
    
    % get the Array_CorrectA
    correctA_3 = [1; 2; 3];
    correctA_3_rand = randperm(3);correctA_3_rand = correctA_3_rand';
    correctA_array_needmod = kron(ones(KronNo,1), correctA_3);
    correctA_array = [correctA_array_needmod; correctA_3_rand(1:mod(ItemNo,3))];
    
    rand_Array = rand(ItemNo,1);
    tmp_Mat = [correctA_array rand_Array];
    tmp_Mat = sortrows(tmp_Mat,2);
    Array_CorrectA = tmp_Mat(:,1);
    
    % get the Array_Filler1_Pos and Array_Filler2_Pos
    Array_Filler1_Pos = Array_CorrectA + 1;
    Array_Filler2_Pos = Array_CorrectA + 2;
    Array_Filler1_Pos(find(Array_Filler1_Pos == 4)) = 1;
    Array_Filler2_Pos(find(Array_Filler2_Pos == 4)) = 1;
    Array_Filler2_Pos(find(Array_Filler2_Pos == 5)) = 2;
    
    % get the question type Array
    Qtype_3 = [1; 2; 3];
    Qtype_3_rand = randperm(3); Qtype_3_rand = Qtype_3_rand';
    Qtype_Array_needmod = kron(ones(KronNo,1), Qtype_3);
    Qtype_Array = [Qtype_Array_needmod; Qtype_3_rand(1:mod(ItemNo, 3))];
    
    rand_Array = rand(ItemNo,1);
    tmp_Matrix = [Qtype_Array rand_Array];
    tmp_Matrix = sortrows(tmp_Matrix,2);
    Array_Qtype = tmp_Matrix(:,1);
    
    % Matrix 8 columns
    Matrix_8Columns = zeros(ItemNo, ColumnNo);
    Matrix_8Columns(:,1) = Array_Qid;
    Matrix_8Columns(:,2) = rand_Array_1;
    Matrix_8Columns(:,3) = rand_Array_2;
    Matrix_8Columns(:,4) = rand_Array_3;
    Matrix_8Columns(:,5) = Array_CorrectA;
    Matrix_8Columns(:,6) = Array_Filler1_Pos;
    Matrix_8Columns(:,7) = Array_Filler2_Pos;
    Matrix_8Columns(:,8) = Array_Qtype;
    
    State_Check = 0;
    for i_Line = 1:ItemNo
        if (Matrix_8Columns(i_Line, 2) == Matrix_8Columns(i_Line, 3) || Matrix_8Columns(i_Line, 2) == Matrix_8Columns(i_Line, 4) || Matrix_8Columns(i_Line, 3) == Matrix_8Columns(i_Line, 4))
            State_Check = State_Check + 1;
        end
    end
    
    if(State_Check == 0)
        break;
    end
end

S = Matrix_8Columns;

end