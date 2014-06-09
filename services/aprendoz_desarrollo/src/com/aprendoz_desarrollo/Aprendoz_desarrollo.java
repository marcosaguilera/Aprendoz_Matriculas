
package com.aprendoz_desarrollo;

import java.util.List;
import com.aprendoz_desarrollo.data.output.GetUserDataRtnType;
import com.aprendoz_desarrollo.data.output.ShowInformationUserRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "aprendoz_desarrollo"
 *  06/06/2014 10:42:11
 * 
 */
@SuppressWarnings("unchecked")
public class Aprendoz_desarrollo
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public com.aprendoz_desarrollo.data.TipoCosto getTipoCostoById(Integer id) {
        List<com.aprendoz_desarrollo.data.TipoCosto> rtn = ((List<com.aprendoz_desarrollo.data.TipoCosto> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getTipoCostoByIdQueryName), id));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetUserDataRtnType> getUserData(String user) {
        return ((List<GetUserDataRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getUserDataQueryName), user));
    }

    public List<ShowInformationUserRtnType> showInformationUser(String user) {
        return ((List<ShowInformationUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.showInformationUserQueryName), user));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
