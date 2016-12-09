% FileName is :: writeEbs.m

% 清屏 + 清除工作空间
clc;clear;

% 定义变量
    SubjectNo = 36;   % 被试数量根据实际情况决定
       ItemNo = 54;  
     RepeatNo = 1;   % 重复次数为1次
     TrialsNo = ItemNo * RepeatNo; % 重复后的项目总数
       LineNo = TrialsNo;

% 各属性所在的列编号
Column_Question_id = 1; %
Column_Word_ID = 2; %
Column_Filler1_ID = 3; %
Column_Filler2_ID = 4; %
Column_CorrectA = 5; %
Column_Filler1_Pos = 6; %
Column_Filler2_Pos = 7; %
Column_Question_Type = 8; %

% 提取当前工作路径
CWPath = fileparts(mfilename('fullpath'));
ebsFileName = 'WENS_hw6.ebs';
picFolderName = 'Images';
ebsPathName = sprintf('%s\\%s', CWPath, ebsFileName);
picPath = sprintf('%s\\%s',CWPath, picFolderName);    % 刺激材料所在位置

% 在此之前，需要将数值矩阵字符串化,大括号中均为每个属性所有可能的情况，均为字符串型
String_Weight = {'1'};  % Weight默认的1，对应字符串'1'
String_Nested = {' '};  % Nested通常默认是 空格 
String_Procedure = {'WordPicture'};  %Procedure为 'WordPictureSelectionTaskProc'
String_Path = {'Images\\\\'}
String_WordID = {'apron';'ashtray';'bandage';'basket';'blanket';'bolster';'booze';'bouquet';'bunk';'cameo';'cane';'carafe';'chain';'chandelier';'choker';'cradle';'curtain';'cushion';'fan';'flask';'glove';'goblet';'hanger';'hanky';'helmet';'hook';'kerchief';'lamp';'mattress';'necklace';'necktie';'perfume';'pillow';'pipe';'pitcher';'polish';'quilt';'radio';'razor';'rug';'saber';'scissors';'scroll';'slipper';'spray';'statue';'suitcase';'tablet';'telephone';'vase';'wardrobe';'wheat';'willow';'worm'}; %单词的Identity信息

String_CorrectResponse = {'{LEFTARROW}'; '{DOWNARROW}'; '{RIGHTARROW}'};%正确按键可能为向左，向下和向右的箭头

% generate Subject Folders
for i = 1:SubjectNo
    % 生成文件夹
    tmpSubPath = sprintf('%s\\Sub%02d', CWPath, i);
    if ~exist(tmpSubPath)
        mkdir(tmpSubPath);
    end
    
    % 拷贝文件夹
    ebsPathName_dest = sprintf('%s\\%s', tmpSubPath, ebsFileName);
    copyfile(ebsPathName, ebsPathName_dest);
    picPath_dest = sprintf('%s\\%s', tmpSubPath, picFolderName);
    copyfile(picPath, picPath_dest);
    
    % 读取刺激矩阵 mrMatrix 
    wpMatrix = Generating_rMatrix(ItemNo);
    
    % 往ebs文件里边输入Blocklist刺激矩阵(往往在文件的最后)
    % 打开ebs文件
    ebsFileID = fopen(ebsPathName_dest,'a+'); %打开目标ebs文件，在其最后写入
    
        for iLine = 1:LineNo  %循环，一行一行的填入矩阵
            fprintf('%d\n', iLine)
            
            % 如果正确答案那一列的值是1，那么左侧的图片为单词对应的图片...
            if wpMatrix(iLine, Column_CorrectA) == 1
                tmpLeftPicture =  String_WordID{wpMatrix(iLine, Column_Word_ID)};
            else
                if wpMatrix(iLine, Column_CorrectA) == 2
                     tmpCenterPicture =  String_WordID{wpMatrix(iLine, Column_Word_ID)};
                else
                     tmpRightPicture =  String_WordID{wpMatrix(iLine, Column_Word_ID)};
                end
            end
            
            % 如果Filler1那一列的值是1，那么左侧的图片为Filler1对应的图片...
            if wpMatrix(iLine, Column_Filler1_Pos) == 1
                tmpLeftPicture =  String_WordID{wpMatrix(iLine, Column_Filler1_ID)};
            else
                if wpMatrix(iLine, Column_Filler1_Pos) == 2
                     tmpCenterPicture =  String_WordID{wpMatrix(iLine, Column_Filler1_ID)};
                else
                     tmpRightPicture =  String_WordID{wpMatrix(iLine, Column_Filler1_ID)};
                end
            end
            
             % 如果Filler2那一列的值是1，那么左侧的图片为Filler2对应的图片...
            if wpMatrix(iLine, Column_Filler2_Pos) == 1
                tmpLeftPicture =  String_WordID{wpMatrix(iLine, Column_Filler2_ID)};
            else
                if wpMatrix(iLine, Column_Filler2_Pos) == 2
                     tmpCenterPicture =  String_WordID{wpMatrix(iLine, Column_Filler2_ID)};
                else
                     tmpRightPicture =  String_WordID{wpMatrix(iLine, Column_Filler2_ID)};
                end
            end
            
            % 生成我们要的字符串，准备逐行写入到.ebs文件中
tmpStringLine = sprintf('%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s', String_Weight{1}, String_Nested{1}, String_Procedure{1}, String_Path{1}, String_WordID{wpMatrix(iLine, Column_Word_ID)}, tmpLeftPicture, tmpCenterPicture, tmpRightPicture, String_CorrectResponse{wpMatrix(iLine,Column_CorrectA)})
            
            if iLine < LineNo 
                fprintf(ebsFileID,'%s\n',tmpStringLine); %\n为换行
            else
                fprintf(ebsFileID,'%s\\0',tmpStringLine); %最后一行加上\0
            end
        end
    
    fclose(ebsFileID); %关闭，写入完毕
    
    
end


